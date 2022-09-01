import dayjs from "dayjs"

const calculateBiorhythm = (birthDate, targetDate, cycle) => {
    const birthday = dayjs(birthDate).startOf('days');
    const targetday = dayjs(targetDate).startOf('days');
    const diff = targetday.diff(birthday, 'days');
    return Math.round(Math.sin(2 * Math.PI * diff / cycle) * 100);
}

export const implementationCalculateBiorhythm = (birthDate, targetDate) => {
    return {
        date: targetDate,
        physical: calculateBiorhythm(birthDate, targetDate, 23),
        emotional: calculateBiorhythm(birthDate, targetDate, 28),
        intellectual: calculateBiorhythm(birthDate, targetDate, 33),
    }
}
export const calculateBiorhythmSeries = (birthDate, startDate, size) => {
    const series = [];
    const startDay = dayjs(startDate).startOf('day');
    for (let i = 0; i < size; i++) {
        const targetDate = startDay.add(i, 'days').toISOString();
        series.push(implementationCalculateBiorhythm(birthDate, targetDate))
    }
    return series
}