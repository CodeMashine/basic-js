const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */


const chainMaker = {
  seed:[],
  getLength() {
    let length = this.seed.length ;
    this.seed = [] ;
    return length ;
  },
  addLink(value ) {
    this.seed.push("( " + value + " )") ;
    return this ;
   },
  removeLink(position) {
    position = position - 1 ;

      // if ( this.seed.length >= position && position > 0  ){
      //   this.seed.splice(position,1) ;
      //   return  this ;
      // }else{
      //   this.seed = [] ;
      //   throw new Error ("You can\'t remove incorrect link!") ; 
      // }
    
    if( this.seed[position] ) {
      this.seed.splice(position,1) ;
      return  this ;
    }else{
      this.seed = [] ;
      throw new Error("You can\'t remove incorrect link!") ;
      
    }
  },
  reverseChain() {
    this.seed.reverse() ;
    return  this ;
  },
  finishChain() {
    let output = this.seed.join("~~") ;
    this.seed = [] ;
    return  output ;
  }
};

module.exports = {
  chainMaker
};

