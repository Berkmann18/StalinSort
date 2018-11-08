import java.util.ArrayList;

public class StalinSort {
  /**
   * Stalin sort (remove all the items that aren"t in order).
   * @param arr Array to sort
   * @return Sorted array
   * @throws Error Invalid order 
   */
  public static int[] sort(int[] arr) throws Exception {
    return sort(arr, "asc");
  }

  /**
   * Stalin sort (remove all the items that aren"t in order).
   * @param arr Array to sort
   * @param order Order ("asc" for ascending or "des" for descending)
   * @return Sorted array
   * @throws Error Invalid order 
   */
  public static int[] sort(int[] arr, String order) throws Exception {
    if (arr.length == 0) return arr;
    ArrayList<Integer> copy = new ArrayList<>();
  
    if (order == "asc") {
      int max = 0;
      for (int item : arr) {
        if (item >= max) {
          max = item;
          copy.add(Integer.valueOf(item));
        }
      }
    } else if (order == "des") {
      int min = Integer.MAX_VALUE;
      for (int item : arr) {
        if (item <= min) {
          min = item;
          copy.add(Integer.valueOf(item));
        }
      }
    } else throw new Exception("Invalid order: " + order);
  
    return copy.stream().mapToInt(i -> i).toArray();
  }
}