export default (state = [], action) => {
  switch(action.type)
  {
    //let idx;
    case 'ADD_QUOTE':
      return [...state, action.quote]
    case 'REMOVE_QUOTE':
      //idx = state.quotes.findIndex(quote => quote.id === action.quoteId);
      return {
        [...state.slice(0, action.quoteId), ...state.slice(action.quoteId + 1)]
      }
    case 'UPVOTE_QUOTE':
      let upvotedQuote = action.quote.votes += 1
      return [...state, upvotedQuote]
    case 'DOWNVOTE_QUOTE':
      let upvotedQuote = action.quote.votes -= 1
      return [...state, upvotedQuote]
    default:
      return state
  }
}
export default (state = [], action) => {
  switch(action.type)
  {
    //let idx;
    case 'ADD_QUOTE':
      return [...state, action.quote]
    case 'REMOVE_QUOTE':
      //idx = state.quotes.findIndex(quote => quote.id === action.quoteId);
      return {
        [...state.slice(0, action.quoteId), ...state.slice(action.quoteId + 1)]
      }
    case 'UPVOTE_QUOTE':
      let upvotedQuote = action.quote.votes += 1
      return [...state, upvotedQuote]
    case 'DOWNVOTE_QUOTE':
      let upvotedQuote = action.quote.votes -= 1
      return [...state, upvotedQuote]
    default:
      return state
  }
}
