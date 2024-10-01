function LinkForm({displayForm}) {
    return(
        <form>
            <label htmlFor="link-url">Link URL</label>
            <input type="text" id="link-url" name="link-url" />
            <button type="submit" className="save-btn">Save</button>
            <button type="button" className="cancel-btn" onClick={displayForm}>Cancel</button>
        </form>
    )
}

export default LinkForm