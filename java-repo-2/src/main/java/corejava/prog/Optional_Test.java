package corejava.prog;

import java.util.Optional;

public class Optional_Test {

    public static void main(String[] args) {
        Optional opt= Optional.of(null);
        System.out.println(opt.isPresent());
        System.out.println(Optional.empty().equals(opt));
    }
}
