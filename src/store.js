

    const setError = function (error){
        this.error =error;
    };
    const findById = function(id){
        return this.bookmark.find(bookmark => bookmark.id === id);
    };
    const addBookmark = function(bookmark){
        this.bookmark.push(bookmark);
    };
    const findAndUpdate = function(id, newData){
        const bookmark = this.findById(id);
        Object.assign(bookmark, newData);
    };

    const findAndDelete = function (id){
        this.bookmark = this.bookmark.filter(bookmark => bookmark.id !== id);
    };
    const findAndToggleExpanded = function(id){
        const bookmark = this.findById(id);
        Object.assign(bookmark, {expanded:!bookmark.expanded});
    }
  export default {
        bookmark: [],
        minimumRating: 0,
        setError,
        addBookmark,
        findById,
        findAndDelete,
        findAndUpdate,
        findAndToggleExpanded,
    };
