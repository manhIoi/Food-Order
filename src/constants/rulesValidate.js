const RULES = {
  required: name => {
    return {
      value: true,
      message: `${name} is required`,
    };
  },
  minLength: (number, name) => {
    return {
      value: number,
      message: `${name} at least ${number} character`,
    };
  },
  maxLength: (number, name) => {
    return {
      value: number,
      message: `${name} at most ${number} character`,
    };
  },
  pattern: (value, name) => {
    return {
      value: value,
      message: `${name} is bad format`,
    };
  },
};

export default RULES;
