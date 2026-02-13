function getMaxLessThanK(n, k) {
    let max = 0;

    for (let A = 1; A <= n; A++) {
        for (let B = A + 1; B <= n; B++) {
            let value = A & B;

            if (value < k && value > max) {
                max = value;
            }
        }
    }

    return max;
}