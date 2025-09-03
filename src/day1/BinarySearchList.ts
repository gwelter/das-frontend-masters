export default function bs_list(haystack: number[], needle: number): boolean {
    let low = 0;
    let hight = haystack.length;

    do {
        const mid = Math.floor(low + (hight - low)/2);
        const value = haystack[mid];
        if (value === needle) {
            return true;
        } else if (value > needle ) {
            hight = mid;
        } else {
            low = mid+1;
        }
    } while (low < hight)
    return false;
}