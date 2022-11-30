import { Post } from "../models/post.interface";

export async function getPosts(): Promise<Post[]> {
    return await (await fetch('assets/db.json')).json().then()
}



// export async function updatePost(data: Partial<Post>, id: number) {
//     let response = await fetch('assets/db.json' + id, {
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json;charset=utf-8',
//         },
//         body: JSON.stringify(response.id == id ? {...response, ...data} : response)
//     });
// }
