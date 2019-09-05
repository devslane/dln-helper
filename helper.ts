import { Dictionary } from "async";
import * as uuidv4 from "uuid";
import * as changeCase from "change-case";

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

    public static generateUUIDV4(): string {
        return uuidv4();
    }

    public static sleep(time: number): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, time));
    }

    public static iterateEnum<T>(enumRef: any): T[] {
        return Object.keys(enumRef).map(key => enumRef[key]);
    }

    public static checkInEnum<T>(enumRef: any, value: T): boolean {
        return Object.keys(enumRef)
            .filter(k => isNaN(Number(k))) // Removing reverse mapping in numeric enums.
            .filter(k => enumRef[k] === value).length > 0;
    }

    public static inflate<T>(object: T, params: Dictionary<any>): T {
        return <T>Object.assign(object, params);
    }

    public static sanitizeString(subject: string): string {
        const asciiPart = subject.replace(/[^\x00-\x7F]/g, "");
        const withoutSpaces = asciiPart.replace(" ", "_");
        return withoutSpaces.toLowerCase();
    }

    public static camelCase(subject: string): string {
        return changeCase.camelCase(subject);
    }

    public static kebabCase(subject: string): string {
        return changeCase.kebabCase(subject);
    }

    public static constantCase(subject: string): string {
        return changeCase.constantCase(subject);
    }

    public static dotCase(subject: string): string {
        return changeCase.dotCase(subject);
    }

    public static isLowerCase(subject: string): boolean {
        return changeCase.isLowerCase(subject);
    }

    public static isUpperCase(subject: string): boolean {
        return changeCase.isUpperCase(subject) as any;
    }

    public static lowerCase(subject: string): string {
        return changeCase.lowerCase(subject);
    }

    public static lowerCaseFirst(subject: string): string {
        return changeCase.lowerCaseFirst(subject);
    }

    public static upperCase(subject: string): string {
        return changeCase.upperCase(subject);
    }

    public static upperCaseFirst(subject: string): string {
        return changeCase.upperCaseFirst(subject);
    }
}
