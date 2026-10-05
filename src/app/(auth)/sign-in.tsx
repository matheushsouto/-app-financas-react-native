import { Feather } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { Link, router } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Pressable, StyleSheet, Text, View } from 'react-native';

import { Button, Screen, TextField } from '../../components/ui';
import { colors, radius, spacing, typography } from '../../constants';
import { getAuthErrorMessage, resetPassword, signIn } from '../../features/auth';