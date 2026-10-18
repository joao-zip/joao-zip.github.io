---
title: Emergency LIBRAS
period: "2024 - 2026"
description: "Video recognition of emergency LIBRAS phrases using Deep Learning (UNIFESP capstone project)"
categories: ['univ', 'opensource']
technologies: ['Python', 'PyTorch', 'OpenCV', 'Scikit-Learn', 'Optuna', 'Deep Learning']
github: https://github.com/joao-zip/emergency-libras
---

Developed as my **Undergraduate Thesis (TCC)** in Computer Science at **UNIFESP**. The goal was to build assistive technology that enables deaf individuals to independently contact emergency services (such as paramedics/SAMU, police, and firefighters) using Brazilian Sign Language (LIBRAS).

During emergencies, traditional voice-call dispatch systems create a severe communication barrier for the deaf community. To help bridge this gap, this project collected and processed a dataset of video recordings covering 26 essential emergency phrases (such as reporting accidents, severe pain, or asking for immediate help) and trained deep learning models to recognize them directly from video.

**How It Works:**
- **Video Recognition with R(2+1)D-18**: Because sign language depends both on hand/facial shapes and how movements unfold over time, we used the R(2+1)D-18 architecture (pretrained on Kinetics-400). It breaks down convolutions into spatial passes (what each frame looks like) and temporal passes (how gestures flow across frames), making it efficient at capturing the dynamics of signing.
- **Fine-Tuning**: Tested different layer-freezing strategies, adapting the pretrained network weights specifically for the 26 emergency classes.
- **Video Preprocessing & Augmentation**: Using OpenCV, each clip is sampled down to 16 frames with data augmentation (playback speed variations, slight rotations, horizontal flipping, and lighting adjustments) to train the model to recognize signs even under imperfect camera conditions.
- **Testing on New Signers (LOPO)**: Everyone has their own signing rhythm, physical build, and style. To prevent the model from simply memorizing a specific person's face or room background, we used *Leave-One-Person-Out* (LOPO) cross-validation: the network is always tested on recordings of a person it never saw during training.
- **Hyperparameter Tuning with Optuna**: Automated searches for optimal learning rates, regularization, and augmentation parameters to maximize the macro F1-score across all phrases.
- **Experiment Tracking with CometML**: Real-time logging of loss curves, per-class metrics, and confusion matrices across training runs.

**Technical Challenges & Learnings:**
- **Working with Video Data**: Training on video clips with PyTorch requires careful GPU memory management and fast data loading. We built an efficient pipeline using OpenCV to decode and transform frames on the fly.
- **Generalizing Across Different People**: Helping the network focus on the true meaning of the gesture rather than individual quirks (body proportions, signing speed, lighting, and camera angles) was the most challenging part of the project.
- **Meaningful Social Impact**: Applying computer vision to a real-world accessibility problem, creating a technical foundation designed to give the deaf community greater autonomy during emergencies.
