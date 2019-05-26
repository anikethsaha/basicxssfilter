export const basicxss = (str : string) : string => {
   let i ;
   for (i = 0; i < str.length; i++) {
		if (str.charAt(i) == "<") {
			str = str.replace(/str.charAt(i)/g, "&lt;");
		}
		if (str.charAt(i) == ">") {
			str = str.replace(/str.charAt(i)/g, "&gt;");
		}
		if (str.charAt(i) == "/" ) {
			str = str.replace(str.charAt(i), "");
		}

   }
   str = encodeURI(str);
   str = str.trim();
   str = escape(str);


   return str;
};
