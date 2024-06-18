"use server";

import routes from "@/configs/apiRoutes";
import Helper from "@/lib/utils/helper";

export async function subscribe(formData: FormData, userAgent: string) {
    const data = {
        email: formData.get('email'),
    }

    try {
        const res = await fetch(Helper.apiRoutes(routes.subscribe), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'User-Agent': userAgent,
            },
            body: JSON.stringify(data),
        })

        if (!res.ok) {
            throw new Error('Error');
        }
    } catch (error) {
        console.log(error);
        return false;
    }
    return true;
}

export async function postComment(formData: FormData) {
    const data = {
        blog_id: formData.get('id'),
        name: formData.get('name'),
        title: formData.get('title'),
        content: formData.get('content'),
    }

    try {
        const res = await fetch(Helper.apiRoutes(routes.comments.store), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })

        if (!res.ok) {
            throw new Error('Error');
        }
    } catch (error) {
        console.log(error);
        return false;
    }
    return true;
}

export async function getComments(blogId: number) {
    try {
        const res = await fetch(Helper.apiRoutes(routes.comments.list + blogId));

        if (!res.ok) {
            throw new Error('Error');
        }
        
        return res.json();
    } catch (error) {
        console.log(error);
        return false;
    }
}