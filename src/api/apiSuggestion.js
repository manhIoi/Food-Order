import callApi from '../utils/callApi';

const callSuggestion = async () => {
  const suggestionCates = await callApi('get', 'category-suggestions');

  const listSuggestion = await suggestionCates.data.map(async suggCate => {
    const suggestion = await callApi(
      'get',
      `restaurant-suggestions/suggestion-by-cate/${suggCate._id}`,
    );
    const resultSuggestion = {
      ...suggCate,
      listSuggestion: suggestion.data,
    };
    return resultSuggestion;
  });

  const result = await Promise.all(listSuggestion);
  return result;
};

export {callSuggestion};
