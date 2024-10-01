
function ProfileForm() {
    return(
        <form>
            <label htmlFor="display name">Display Name</label>
            <input type="text" id="display-name" name="display-name" />
            <label htmlFor="image">Image</label>
            <input type="text" id="image-url" name="image-url" />
            <button className="save-btn">Save</button>
        </form>
    )
}

export default ProfileForm