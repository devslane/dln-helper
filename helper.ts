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
}
