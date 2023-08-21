package corejava.jdk8;

import java.util.Arrays;

public class MethodReferences {

	public void printByStringLength() {
		String[] names = { "abcde", "abc", "ab", "abcd", "a" };
		Arrays.sort(names, StringComparator::matchStringLength); // method reference
		System.out.println(Arrays.toString(names));
	}

	public static void main(String[] args) {
		new MethodReferences().printByStringLength();
	}
}

class StringComparator {
	public static int matchStringLength(String str1, String str2) {
		return str1.length() - str2.length();
	}
}