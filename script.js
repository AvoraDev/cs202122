const soup = {
  flavor: 'tomato',
  temperature: 'hot',
  quality: 'perfect',
  DescribeMe: function() {
    return `My flavor is ${this.flavor}, I am currently ${this.temperature} and ${this.quality}`;
  } 
};
