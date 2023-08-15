export const sortAsteroidsByDate = (asteroids: any[]): any[] => {
  return asteroids.sort((a, b) => {
    const dateA = new Date(a.close_approach_data[0].close_approach_date_full);
    const dateB = new Date(b.close_approach_data[0].close_approach_date_full);
    return dateA.getTime() - dateB.getTime();
  });
};
