import React from "react";
import { ReactNode } from "react";
import { StyleSheet, Text, TextInput, TextInputProps, View } from "react-native";
import { colors, radius, spacing, typography } from "../../constants";

type TextFieldProps = TextInputProps & {
  label: string;
  error?: string;
  leftIcon?: ReactNode;
  rightElement?: ReactNode;
}

export function TextField({
  label,
  error,
  leftIcon,
  rightElement,
  style,
  ...rest
}: TextFieldProps) {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}> {label}</Text>
      <View style={[styles.input, !!error && styles.inputError]}>
        {!!leftIcon && <View style={styles.leftIcon}>{leftIcon}</View>}
      
      <TextInput style={[styles.textInput, style]}
                 placeholderTextColor={colors.textMuted}
                 {...rest}
      />
      {!!rightElement && <View style={styles.rightElement}>
        {rightElement}
        </View>}
      
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    gap: spacing.sm
  },
  label: {
    ...typography.caption,
    fontWeight: '600',
    color: colors.text
  },
  input: {
    height: 52,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
    paddingHorizontal: spacing.lg,
  },
  inputError: {
    borderColor: colors.statusOverdue,
  },
  textInput: {
    flex: 1,
    height: '100%',
    ...typography.body,
    color: colors.text,
  },
  leftIcon: {
    marginRight: spacing.sm,
  },
  rightElement: {
    marginLeft: spacing.sm,
  },
  error: {
    ...typography.caption,
    color: colors.statusOverdue
  },
});
