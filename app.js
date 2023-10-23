class GeometricProgressionCalculator {
    async calculateSum(firstTerm, commonRatio, numberOfTerms) {
      const termExponent = await this.calculateTermExponent(commonRatio, numberOfTerms);
      console.log(termExponent)
      const numerator1 = await this.calculateNumerator1(termExponent);
      console.log(numerator1)
      const numerator = await this.calculateNumerator(firstTerm, numerator1);
      console.log(numerator)
      const denominator = await this.calculateDenominator(commonRatio);
      console.log(denominator)
      const intermediateResult = await this.calculateIntermediateResult(numerator, denominator);
      const sum = await this.calculateSumFinal(intermediateResult);
      return sum;
    }
  
    async calculateNumerator1(termExponent) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve((1 - termExponent));
        }, 100);
      });
    }

    async calculateNumerator(firstTerm, numerator1) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve( (firstTerm * numerator1) );
        }, 100);
      });
    }
  
    async calculateDenominator(commonRatio) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(1 - commonRatio);
        }, 100);
      });
    }
  
    async calculateTermExponent(commonRatio, numberOfTerms) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(Math.pow(commonRatio, numberOfTerms));
        }, 100);
      });
    }
  
    async calculateIntermediateResult(numerator, denominator) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(numerator / denominator);
        }, 100);
      });
    }
  
    async calculateSumFinal(intermediateResult) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(intermediateResult);
        }, 100);
      });
    }
  }
  
const submitBtn = document.getElementById('calculateButton');


submitBtn.addEventListener("click", async function (e) {
  e.preventDefault();
  let ft = Number(document.getElementById('firstTerm').value);
  let cr = Number(document.getElementById('commonRatio').value);
  let n = Number(document.getElementById('numberOfTerms').value);
  
  const gpc = new GeometricProgressionCalculator();
  const sum = await gpc.calculateSum(ft, cr, n);
  console.log(sum)
  document.getElementById('resultSum').innerHTML = sum; 

})