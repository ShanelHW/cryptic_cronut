import "./Search.css";

const Search = () => {
  return (
    <div>
      <div class="searchBox" id='search-box-container'>
        <input type="search" id="gsearch" name="gsearch" />
        <button class="btn">
        <i class="bi bi-record-circle-fill" id='submit'></i>
        </button>
        <h3 class="response" id='response'></h3>
      </div>
    </div>
  );
};

export default Search;
