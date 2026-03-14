#[cfg(test)]
mod next_random_color_index {
    use background_process::color::{COLORS, next_random_color_index};

    #[test]
    fn with_excluded_index() {
        let index = 2;
        assert_ne!(next_random_color_index(Some(index)), index)
    }

    #[test]
    fn without_excluded_index() {
        let result = next_random_color_index(None);
        assert!(result < COLORS.len());
    }

    #[test]
    fn excludes_last_index() {
        let index = COLORS.len() - 1;
        let result = next_random_color_index(Some(index));
        assert_ne!(result, index);
        assert!(result < COLORS.len());
    }

    #[test]
    fn excludes_first_index() {
        let index = 0;
        let result = next_random_color_index(Some(index));
        assert_ne!(result, index);
        assert!(result < COLORS.len());
    }

    #[test]
    fn returns_valid_range() {
        for _ in 0..100 {
            let result = next_random_color_index(Some(2));
            assert!(result < COLORS.len());
        }
    }
}

#[cfg(test)]
mod tests {
    use background_process::color::{COLORS, color_at};
    use rand::random_range;

    #[test]
    fn normal_case() {
        let index = COLORS.len() / 2;
        assert_eq!(color_at(index), COLORS[index]);
    }

    #[test]
    fn zero_case() {
        let index = 0;
        assert_eq!(color_at(index), COLORS[index]);
    }

    #[test]
    fn last_valid_index() {
        let index = COLORS.len() - 1;
        assert_eq!(color_at(index), COLORS[index]);
    }

    #[test]
    fn out_of_bound_at_len() {
        let index = COLORS.len();
        assert_eq!(color_at(index), COLORS[index % COLORS.len()]);
    }

    #[test]
    fn out_of_bound_after_len() {
        let index = COLORS.len() + 1;
        assert_eq!(color_at(index), COLORS[index % COLORS.len()]);
    }

    #[test]
    fn out_of_bound_random() {
        let index = random_range(COLORS.len() + 2..100);
        assert_eq!(color_at(index), COLORS[index % COLORS.len()]);
    }

    #[test]
    fn wraps_correctly() {
        let index = COLORS.len() * 3 + 2;
        assert_eq!(color_at(index), COLORS[2]);
    }
}
