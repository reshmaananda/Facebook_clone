package com.springPractise.facebookclone.service;

import com.springPractise.facebookclone.model.Post;

import java.util.List;

public interface PostService {
    Post addPost(Post post) throws Exception;

    List<Post> getPost();
}
