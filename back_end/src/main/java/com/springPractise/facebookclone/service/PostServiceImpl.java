package com.springPractise.facebookclone.service;

import com.springPractise.facebookclone.entity.PostEntity;
import com.springPractise.facebookclone.model.Post;
import com.springPractise.facebookclone.repository.PostEntityRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class PostServiceImpl implements PostService{

    private PostEntityRepository postEntityRepository;


    public PostServiceImpl(PostEntityRepository postEntityRepository) {
        this.postEntityRepository = postEntityRepository;
    }

    @Override
    public Post addPost(Post post) throws Exception {
        try{
            PostEntity postEntity = new PostEntity();
            BeanUtils.copyProperties(post, postEntity);

            if(post.getFile()!=null){
                postEntity.setImage(post.getFile());
            }else{
                postEntity.setImage(null);
            }

            postEntity = postEntityRepository.save(postEntity);

            post.setImage(postEntity.getImage());
            post.setId(postEntity.getId());
            post.setFile(null);



        }catch(Exception e ){
            throw new Exception("Could not save post: " +e);
        }
        return post;
    }

    @Override
    public List<Post> getPost() {

        List <PostEntity> postEntities = postEntityRepository.findAll();

        List <Post> posts = new ArrayList<>();

        posts = postEntities.stream()
                .map((postEntity) ->
                        Post.builder()
                        .id(postEntity.getId())
                        .email(postEntity.getEmail())
                        .timeStamp(postEntity.getTimeStamp())
                        .name(postEntity.getName())
                        .post(postEntity.getPost())
                        .image(postEntity.getImage())
                        .profilePic(postEntity.getProfilePic())
                        .build())
                .collect(Collectors.toList());

        return posts;
    }
}
