export const convert = async (base, destination) => {
  try {
      const response = await fetch(`https://api.exchangeratesapi.io/latest?base=${base}`);
      const data = await response.json();
      return data.rates[destination];
  } catch (error) {
    console.log(error);
  }
};
