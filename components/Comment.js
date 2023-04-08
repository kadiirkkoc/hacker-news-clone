

export default function Comment(comment){

    const hasNestedComment = comment.comments.length > 0

    return `
        <div class="nested-comments-${comment.level}">
            <p class="comment-header">
                ${comment.user} | ${comment.time_ago}
            </p>
            ${comment.content}
            ${hasNestedComment ? comment.comments.map(comment => Comment(comment)).join("") : "no comment avaliable"}
        </div>
    `
}