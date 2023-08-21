package corejava.prog;

public class WhileLoop {

    public static void main(String[] args) {
        System.out.println(sum(5));
    }

    static int sum(int n) {
        int sum =0;
        while (  n >0){
            sum = sum + n--;
        }
        return sum;
    }

}
