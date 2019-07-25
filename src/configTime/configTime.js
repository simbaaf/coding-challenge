
export const getDateBeforeMonth = () => {
    const currentDate = new Date();  
    currentDate.setDate(currentDate.getDate() - 30);
    // the date will take this form  "YYYY-MM-DD"
    let beforeMonth= currentDate.toJSON(currentDate).split("T")[0];  
    return beforeMonth;
  };