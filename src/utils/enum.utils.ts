export function getRandomEnumValue<T extends object>(anEnum: T): T[keyof T] {
    const enumValues = Object.keys(anEnum)
        .map(n => anEnum[n as keyof T])
        .filter(v => typeof v === 'string') as T[keyof T][];

    if (enumValues.length === 0) {
        throw new Error('Enum has no string values to pick from.');
    }

    const randomIndex = Math.floor(Math.random() * enumValues.length);
    return enumValues[randomIndex];
} 