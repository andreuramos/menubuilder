import {Category} from "./Category";

describe("Category", () => {
    it("throws error when non valid category", () => {
        expect(() => {
            const cateogry = new Category("sushi");
        }).toThrow("sushi is not a valid category");
    });

    it("instantiates the object when valid value", () => {
        const category = new Category("carne");

        expect(category.getName()).toBe("carne");
    });
});
