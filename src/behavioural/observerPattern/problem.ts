// for example we have dataSource and There are representation 
// classes -- for every change in dataSrouce these classes
// should also get notified

// class DataSource{
//   value: number;

//   setValue(value: number){
//     // it should also notify after changing data
//     this.value = value;
//   }

//   getValue(){
//     return this.value;
//   }
// }

// class SpreadSheet {

//   showTotal(){
//     console.log('spreadSheet');
//   }
// }

// class Chart {

//   showChart(){
//     console.log('show chart')
//   }
// }