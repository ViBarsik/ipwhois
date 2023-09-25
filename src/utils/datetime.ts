export const getSecondDiff = (startDate: Date, endDate: Date): number => {
	return Math.abs(Math.round((endDate.getTime() - startDate.getTime()) / 1000));
}
