#[cfg(test)]
mod color_at {
    use background_process::color::{COLORS, color_at};
    use rand::random_range;

    #[test]
    fn color_at_normal_case() {
        let index = COLORS.len() / 2;
        assert_eq!(color_at(index), COLORS[index]);
    }

    #[test]
    fn color_at_zero_case() {
        let index = 0;
        assert_eq!(color_at(index), COLORS[index]);
    }

    #[test]
    fn color_at_out_of_bound_at_len() {
        let index = COLORS.len();
        assert_eq!(color_at(index), COLORS[index % COLORS.len()]);
    }

    #[test]
    fn color_at_out_of_bound_after_len() {
        let index = COLORS.len() + 1;
        assert_eq!(color_at(index), COLORS[index % COLORS.len()]);
    }

    #[test]
    fn color_at_out_of_bound_after_len_random() {
        let index = random_range(COLORS.len() + 2..100);
        assert_eq!(color_at(index), COLORS[index % COLORS.len()]);
    }
}
