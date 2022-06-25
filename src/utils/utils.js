const utils =  {
    formateTime(date) {
      if (!date) return '';
      let time = date.toLocaleString();
      time = time.replace(/\//g, '-');
      return time;
    },
  };
     
     
export default utils;