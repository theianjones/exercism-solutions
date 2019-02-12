function isLeapYear(year:number) {
    const devisableByFour = ((year / 4) % 1 == 0)
    const devisableByFourHundred = ((year / 400) % 1 == 0)
    const devisableByOneHundred = ((year / 100) % 1 == 0)

    return devisableByFourHundred || (!devisableByOneHundred && devisableByFour)
}

export default isLeapYear