export class JSHelper {
    public static generateRandomString(start = "z", length = 8, caseSensitive = false) {
        let text = start;
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

        if (caseSensitive) {
            possible = possible + "abcdefghijklmnopqrstuvwxyz";
        }

        for (let i = 1; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }

        return text;
    }

    public static generateRandomNumber(max: number, min?: number) {
        const effectiveMin = min || 0;

        const _window = max - min;

        if (_window <= 0) {
            throw "PARAMS_ERROR";
        }

        return min + Math.floor(Math.random() * _window);
    }
}
