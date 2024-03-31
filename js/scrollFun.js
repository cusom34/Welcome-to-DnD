window.onscroll = function() {scrollFun()};

		function scrollFun()
		{
			if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
			{
				document.getElementById('go_top').style.display = "block";
			}
			else 
			{
				document.getElementById('go_top').style.display = "none";
			}
		}