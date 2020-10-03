/**
 * @author Sourav Debnath <sourav2012d@gmail.com>
 *
 * @constructor
 * @param {array} data - The array utilized to implement stack.
 */

class Stack {
  constructor() {
    this.data = [];
  }

  /**
   * @function push() - Inserts element in the Stack
   * @param {dataType} - The data to be inserted in the stack
   */
  push(item) {
    this.data.push(item);
  }

  /**
   * @function pop() - Retrieves element from the Stack Top
   */
  pop() {
    return this.data.pop();
  }

  /**
   * @function peek() - Retrieves element from the Stack Top without removing it from the Stack
   */
  peek() {
    return this.data[this.data.length - 1];
  }

  /**
   * @function isEmpty() - Checks whether stack is Empty or Not
   * @returns {boolean}
   */
  isEmpty() {
    return this.data.length > 0 ? false : true;
  }
}
