# Load Testing Setup

This directory contains load testing scripts for the Next.js portfolio website using k6.

## Prerequisites

1. Install k6:
   - macOS: `brew install k6`
   - Windows: `choco install k6`
   - Linux: `sudo gpg -k && sudo gpg --no-default-keyring --keyring /usr/share/keyrings/k6-archive-keyring.gpg --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys C5AD17C747E3415A3642D57D77C6C491D6AC1D69 && echo "deb [signed-by=/usr/share/keyrings/k6-archive-keyring.gpg] https://dl.k6.io/deb stable main" | sudo tee /etc/apt/sources.list.d/k6.list && sudo apt-get update && sudo apt-get install k6`

## Running Load Tests

1. Start your Next.js development server:
   ```bash
   npm run dev
   ```

2. In a new terminal, run the load test:
   ```bash
   k6 run basic-load-test.js
   ```

## Test Configuration

The basic load test (`basic-load-test.js`) is configured to:
- Ramp up to 20 virtual users over 30 seconds
- Maintain 20 users for 1 minute
- Ramp down to 0 users over 30 seconds
- Expect 95% of requests to complete within 500ms
- Expect less than 1% of requests to fail

## Customizing Tests

To modify the load test:
1. Adjust the `options` object in the test file to change:
   - Number of virtual users
   - Test duration
   - Performance thresholds
2. Add or modify the test scenarios in the default function
3. Update the `BASE_URL` constant to test against different environments

## Monitoring Results

k6 will output detailed metrics including:
- HTTP request duration
- Request rates
- Error rates
- Virtual user counts
- And more

## Best Practices

1. Always start with a small number of users and gradually increase
2. Test against a staging environment first
3. Monitor your server's resources during tests
4. Set appropriate thresholds based on your requirements
5. Consider testing different types of user behaviors 