import { Dictionary } from "async";
import { lstatSync, PathLike } from "fs";
import * as uuidv4 from "uuid";
import * as changeCase from "change-case";
import * as fs from "fs";

export class DlnHelper {
    public static generateRandomString({
                                           randomLength = 8,
                                           prefix = "",
                                           suffix = "",
                                           includeLowerCase = true,
                                           includeUpperCase = true,
                                           includeNumbers = true,
                                           includeSpecialCharacters = false,
                                           specialCharacters = "!@#$%^&*()"
                                       } = {}) {
        let text = "";

        if (randomLength <= 0) {
            // Original String is already
            // greater than required length
            return prefix + suffix;
        }

        let dictionary = "";

        if (includeLowerCase) {
            dictionary += "abcdefghijklmnopqrstuvwxyz";
        }

        if (includeUpperCase) {
            dictionary += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        }

        if (includeNumbers) {
            dictionary += "1234567890";
        }

        if (includeSpecialCharacters) {
            dictionary += specialCharacters;
        }

        for (let i = 1; i <= randomLength; i++) {
            text += dictionary.charAt(Math.floor(Math.random() * dictionary.length));
        }

        return prefix + text + suffix;
    }

    public static generateRandomNumber({
                                           max = 9999,
                                           min = 0
                                       } = {}) {
        const _window = max - min;

        if (_window <= 0) {
            throw "max should be greater than min";
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

    public static isDirectory(source: PathLike): boolean {
        return lstatSync(source).isDirectory();
    }

    public static isFile(source: PathLike): boolean {
        return lstatSync(source).isFile();
    }

    public static deleteFile(filePath: PathLike): void {
        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
        }
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
