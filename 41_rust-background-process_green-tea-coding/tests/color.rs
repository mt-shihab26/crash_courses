#[cfg(test)]
mod next_random_color_index {
    use background_process::color::next_random_color_index;

    #[test]
    fn normal_case() {
        let index = 2;
        assert_ne!(next_random_color_index(Some(index)), index)
    }
}

#[cfg(test)]
mod color_at {
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
    fn color_at_out_of_bound_after_len_random() {
        let index = random_range(COLORS.len() + 2..100);
        assert_eq!(color_at(index), COLORS[index % COLORS.len()]);
    }
}
