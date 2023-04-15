const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */


const chainMaker = {
  seed:[],
  getLength() {
    return this.seed.length ;
  },
  addLink(value ) {
    this.seed.push("( " + value + " )") ;
    return this ;
   },
  removeLink(position) {
    position = position - 1 ;

    try{
      if ( this.seed.length >= position && position > 0  ){
        this.seed.splice(position,1) ;
        return  this ;
      }else{
        throw new Error ("You can\'t remove incorrect link!") ; 
      }
    }catch( error ){
      return error.message ;
    }
    
    // if( !this.seed[position] ) {
    //   throw new Error("You can\'t remove incorrect link!") ;
    // }
  //  this.seed.splice(position,1) ;
  //  return  this ;
  },
  reverseChain() {
    this.seed.reverse() ;
    return  this ;
  },
  finishChain() {
   return  this.seed.join("~~") ;
  }
};

module.exports = {
  chainMaker
};


// console.log(chainMaker.addLink(1).addLink(2).reverseChain().addLink(3).getLength());
// console.log(chainMaker.addLink('GHI').addLink(null).reverseChain().addLink(333).reverseChain().reverseChain().addLink(0).reverseChain().reverseChain().addLink('GHI').finishChain());
// console.log(chainMaker.reverseChain().reverseChain().addLink(NaN).addLink({ 0: 'first', 1: 'second', 'length': 2 }).addLink({ 0: 'first', 1: 'second', 'length': 2 }).addLink({ 0: 'first', 1: 'second', 'length': 2 }).reverseChain().reverseChain().addLink({ 0: 'first', 1: 'second', 'length': 2 }).addLink(true).finishChain());
console.log(chainMaker.addLink(function () { }).addLink('2nd').addLink('3rd').removeLink(2).reverseChain().finishChain());

// chainMaker.addLink('GHI').addLink(null).reverseChain().addLink(333).reverseChain().reverseChain().addLink(0).reverseChain().reverseChain().addLink('GHI').finishChain(), '( null )~~( GHI )~~( 333 )~~( 0 )~~( GHI )');
// chainMaker.reverseChain().reverseChain().addLink(NaN).addLink({ 0: 'first', 1: 'second', 'length': 2 }).addLink({ 0: 'first', 1: 'second', 'length': 2 }).addLink({ 0: 'first', 1: 'second', 'length': 2 }).reverseChain().reverseChain().addLink({ 0: 'first', 1: 'second', 'length': 2 }).addLink(true).finishChain(), 
// ( NaN )~~( [object Object] )~~( [object Object] )~~( [object Object] )~~( [object Object] )~~( true );