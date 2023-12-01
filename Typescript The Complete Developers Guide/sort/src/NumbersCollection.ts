export class NumbersCollection {
    constructor(public data: number[]) {}

    // LENGTH GETTER
    get length(): number {
        return this.data.length;
    }

    compare(leftIndex: number, rightIndex: number): boolean {
        // RETURNS TRUE IF LEFT INDEX IS GREATER THAN RIGHT INDEX
        return this.data[leftIndex] > this.data[rightIndex];
    }

    swap(leftIndex: number, rightIndex: number): void {
        const temp = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = temp;
    }
}
