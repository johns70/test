interface makeBuildPersonOption {
    getUUID: () => {};
    getAge: () => {};
}
interface OptionPerson {
    name: string;
    birthdate: string;
}
export declare const buildMakePerson: ({ getUUID, getAge }: makeBuildPersonOption) => ({ name, birthdate }: OptionPerson) => {
    id: {};
    name: string;
    birthdate: string;
    age: {};
};
export {};
//# sourceMappingURL=05-factory.d.ts.map