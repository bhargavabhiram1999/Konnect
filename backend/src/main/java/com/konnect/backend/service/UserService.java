package com.konnect.backend.service;

import com.konnect.backend.model.User;
import com.konnect.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User saveUser(User user) {
        return userRepository.save(user);
    }

    public User getUserById(Long id) {
        return userRepository.findById(id).orElse(null); // Return null or throw an exception if user not found
    }

    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }
}

