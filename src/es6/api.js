export async function getData() {
    return new Promise((resolve) => {
        //setTimeout es solo la forma de decirle que despues de un tiempo ejecute una funcion
        setTimeout(() => {
            resolve([{
                movie: "El despertar de los michis",
                year: 2021,
                protagonist: "Mr. Michi"
            }, {
                movie: "101 Michis",
                year: 2019,
                protagonist: "Tommy Michiguire"
            }]);
        }, 1000);
    });
}

export default getData;