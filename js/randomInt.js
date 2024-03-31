function getRandomInt(min, max) 
		{
  			min = Math.ceil(min);
  			max = Math.floor(max);
  			document.querySelector('.sum').innerHTML = Math.floor(Math.random() * (max - min)) + min;
  		}		