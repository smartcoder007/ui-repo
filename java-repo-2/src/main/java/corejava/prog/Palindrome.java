package corejava.prog;

public class Palindrome {
    public static void main(String[] args) {
        //System.out.println(reversal2("racecar1"));
        System.out.println(recursiveString("racecar1"));
    }

    static String reversal(String word) {
        char[] wordArray = word.toCharArray();
        int length = wordArray.length;

        StringBuffer sb = new StringBuffer();
        for (int i = length - 1; i >= 0; i--) {
            sb.append(wordArray[i]);
        }
        return sb.toString();
    }

    static String reversal2(char[] word) {
        boolean isPalindrome=true;
       for(int i=0;i<word.length/2;i++){
           int count =0;
           for(int j=word.length-1;j>word.length/2;j--) {
               //0=6
               //1=5
               //2=4
               //
               if(i==j){
                   char temp =word[j];
                   word[j]=word[i];
                   word[i]=temp;
               }
             //  System.out.println(''word.charAt(i));
             //  System.out.println(word.charAt(j));
           }
       }

        return word.toString();
    }

    public static String recursiveString(String word){
        if(word.isEmpty()){
            return word;
        } else {
            String temp= recursiveString(word.substring(1)) + word.charAt(0);
            System.out.println(temp);
            return temp;
        }
    }
}
