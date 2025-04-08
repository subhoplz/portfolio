import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
    stages: [
        { duration: '30s', target: 5 }, // Reduced to 5 users for diagnosis
        { duration: '1m', target: 5 },  // Stay at 5 users for 1 minute
        { duration: '30s', target: 0 },  // Ramp down to 0 users
    ],
    thresholds: {
        http_req_duration: ['p(95)<1000'], // 95% of requests should be below 1000ms (increased for production)
        http_req_failed: ['rate<0.01'],   // Less than 1% of requests should fail
    },
};

const BASE_URL = 'https://portfolio-seven-orcin-12.vercel.app';

export default function () {
    // Test the home page
    const homeRes = http.get(BASE_URL);
    console.log(`Home page status: ${homeRes.status}, URL: ${homeRes.url}`);
    if (homeRes.status !== 200) {
        console.log(`Home page response body: ${homeRes.body.substring(0, 200)}...`);
    }

    check(homeRes, {
        'home page status is 200': (r) => r.status === 200,
        'home page loads fast': (r) => r.timings.duration < 1000,
    });

    sleep(2);

    // Test the about page
    const aboutRes = http.get(`${BASE_URL}/about`);
    console.log(`About page status: ${aboutRes.status}, URL: ${aboutRes.url}`);
    if (aboutRes.status !== 200) {
        console.log(`About page response body: ${aboutRes.body.substring(0, 200)}...`);
    }

    check(aboutRes, {
        'about page status is 200': (r) => r.status === 200,
        'about page loads fast': (r) => r.timings.duration < 1000,
    });

    sleep(2);

    // Test with headers to mimic a browser
    const headers = {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5',
        'Connection': 'keep-alive',
        'Upgrade-Insecure-Requests': '1',
    };

    const homeWithHeadersRes = http.get(BASE_URL, { headers });
    console.log(`Home page with headers status: ${homeWithHeadersRes.status}, URL: ${homeWithHeadersRes.url}`);
    if (homeWithHeadersRes.status !== 200) {
        console.log(`Home page with headers response body: ${homeWithHeadersRes.body.substring(0, 200)}...`);
    }

    check(homeWithHeadersRes, {
        'home page with headers status is 200': (r) => r.status === 200,
        'home page with headers loads fast': (r) => r.timings.duration < 1000,
    });

    sleep(2);
} 