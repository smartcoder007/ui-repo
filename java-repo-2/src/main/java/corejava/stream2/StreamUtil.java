package corejava.stream2;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.OptionalDouble;
import java.util.stream.Collectors;

public class StreamUtil {

    public static void main(String[] args) {
        List<Employee> employeeList = getEmployeeList();
        testGroupBy(employeeList);
        testConsolidation(employeeList);


    }
    public static void testGroupBy(List<Employee> employeeList){
        Map<String, List<Employee>> employeeMap =  employeeList.stream().collect(Collectors.groupingBy(Employee::getDepartment));
        employeeMap.forEach((s, employees) -> System.out.println(employees));
    }

    public static void testConsolidation(List<Employee> employeeList) {
      OptionalDouble avgSalary = OptionalDouble.of(employeeList.stream().mapToDouble(e-> e.getSalary()).average().getAsDouble());
      System.out.println(avgSalary.getAsDouble());
    }

    private static List<Employee> getEmployeeList(){
        List<Employee> employeeList = new ArrayList<Employee>();
        employeeList.add(new Employee("Mr",1000,"jhon", "it"));
        employeeList.add(new Employee("Mrs",1000,"Marry", "it"));
        employeeList.add(new Employee("Mr",1000,"gary", "hr"));
        employeeList.add(new Employee("Mr",3000,"ravi", "it"));
        employeeList.add(new Employee("Mr",1000,"prasad", "finance"));
        employeeList.add(new Employee("Mrs",5000,"samantha", "it"));
        return employeeList;
    }
}
